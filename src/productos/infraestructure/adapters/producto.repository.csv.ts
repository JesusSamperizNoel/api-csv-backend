import * as path from "path";
import csvToJson from "csvtojson";
import ProductoRepository from "../../domain/producto.repository";
import Producto from "../../domain/Producto";

export default class ProductoRepositoryCSV
  implements ProductoRepository
{
  async getAll(): Promise<Producto[]> {
    const productos: Producto[] = []
    const csvFilePath = path.resolve(
        __dirname,
        "../../../context/sources/styles.csv"
    )
    try {
        const data = await csvToJson().fromFile(csvFilePath)
        for (const prod of data) {
            const producto: Producto = {
                id: prod["id"],
                gender: prod["gender"],
                masterCategory: prod["masterCategory"],
                subCategory: prod["subCategory"],
                articleType: prod["articleType"],
                baseColour: prod["baseColour"],
                season: prod["season"],
                year: prod["year"],
                usage: prod["usage"],
                productDisplayName: prod["productDisplayName"]
            }
            productos.push(producto)
        }
    } catch (error) {
        console.error(error)
    }
    return productos
  }

  async getByParams(producto: Producto): Promise<Producto[]> {
      throw new Error("Method not implemented.");
  }
  
}
