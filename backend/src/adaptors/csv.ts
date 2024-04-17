import csv from "csvtojson";
import { ERROR_MSG_CONVERT, ERROR_MSG_DIR_UNDEFINED, ERROR_MSG_FILE_UNDEFINED } from "../constants/error";
import { AbstractDataSource } from "./abstract";


export class CsvAdaptor extends AbstractDataSource {

/**
 * Fetches data from a specified CSV file and converts it into JSON format.
 * 
 * @param filename - The name of the target CSV file (without extension).
 * @returns A promise resolving to an array of JSON objects representing CSV rows.
 */
  async read(filename: string, identifer?: string): Promise<any[] | null> {
    const DIR_PATH: string | undefined = process.env.CSV_DIR_PATH;

    try {
      if (!DIR_PATH) {
        throw new Error(ERROR_MSG_DIR_UNDEFINED);
      }
      if (!filename) {
        throw new Error(ERROR_MSG_FILE_UNDEFINED);
      }

      const filePath = `${DIR_PATH}/${filename}.csv`;
      const jsonData: any[] = await csv().fromFile(filePath); // Parse CSV as Json.

      return jsonData;
    }
    catch {
      throw new Error(ERROR_MSG_CONVERT);
    }
  }

  async write<T>(filename: string, data: any, identifer = false) {
    // Data Source Specific Code
  }
}