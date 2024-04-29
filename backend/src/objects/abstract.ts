import { ERROR_MSG_DATA_FETCH } from "../constants/error";
import { DataAdaptorFactory } from "../adaptors/factory";


export default abstract class AbstractObject {

  protected type: string;
  protected adaptor: any;

  constructor(type: string) {
    this.adaptor = DataAdaptorFactory.createDataAdaptor();
    this.type = type;
  }

  protected async create<T extends object>(data: any): Promise<void> {
    this.adaptor.write(this.type, data as T);
  }

/**
 * Fetches data of a specified type from the data source and filters the results based on provided criteria.
 * 
 * @param type - The type of data to retrieve.
 * @returns A function that takes GraphQL resolver arguments and returns a Promise resolving to an array of objects.
 */
  retrieve<T extends object>(identifer?: string) {
    return async (obj: any, args: { filter: T }, context: any, info: any): Promise<T[]> => {

      const params = {
        ...args, // arguments passed to the database query.
      };

      // Extracting filter input from arguments
      const { filter } = args;

      try {
        const dataArray = await this.adaptor.read(this.type, params) as T[];

        if (filter) {
          return await this.filterData<T>(filter, dataArray);
        }
        else {
          return dataArray;
        }
      }
      catch (error) {
        throw new Error(`${ERROR_MSG_DATA_FETCH}, error: ${error}`);
      }
    };
  }

  async update<T>(identifer: string, data: any): Promise<void> {
    this.adaptor.write(this.type, data as T, identifer);
  }

  async delete(identifer: string): Promise<void> {
    this.adaptor.write(this.type, {}, identifer);
  }


  //// DEPRECATED ////
// /**
//  * Converts keys of objects within an array from snake_case to camelCase, specifically targeting the 'contact_number' field.
//  *
//  * @param data An array of objects where each object's keys represent data fields.
//  * @returns A new array derived from the input data, where each object's 'contact_number' field (if present) has been renamed to 'contactNumber'.
//  */
//   private mapData(data: any[]): any[] {
//     return data.map(item => {
//       const result: { [key: string]: any } = {};

//       for (const key in item) {
//         // Only transform the data that we know to be snake_case to camelCase.
//         // const newKey = key === 'contact_number' ? 'contactNumber' : key;
//         result[key] = item[key];
//       }

//       return result;
//     });
//   }

/**
 * Filters a list of objects based on the provided filter criteria.
 *
 * @template T The object type that the function works with.
 *
 * @param filter An object containing the filter criteria.
 * @param dataArray An array of objects to be filtered.
 * @returns A promise that resolves with an array of objects that match the filter criteria.
 */
  private async filterData<T extends object>(filter: T, dataArray: T[]): Promise<T[]> {
    try {
      // Prefered approach for increase readibility.
      // Filter the data
      const filteredData = dataArray.filter((data: T) => {
        let matches = false;

        for (const [key, value] of Object.entries(filter)) {
          // Check if key exists and if its value is a match.
          const dataValue = (data[key as keyof typeof data] as string).toLowerCase();

          if (key in data && dataValue === value.toLowerCase()) {
            matches = true;
            break;
          }
        }

        return matches;
      });

      // // Filter the data
      // const filteredData = dataArray.filter((data: T) => {
      // // Check if key exists and if its value is a match.
      //   return Object.entries(filter).every(([key, value]) => {
      //     const dataValue = (data[key as keyof T] as string)?.toLowerCase();
      //     return key in data && dataValue === (value as string)?.toLowerCase();
      //   });
      // });
      
      // console.log("filteredData ", filteredData);
      // return this.mapData(filteredData);
      return filteredData;
    }
    catch (error) {
      throw new Error(`${ERROR_MSG_DATA_FETCH}, error: ${error}`);

    }
  }
}