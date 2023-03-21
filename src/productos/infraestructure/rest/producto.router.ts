//express:
import express, { Request, Response } from "express";
//usecases:
import ProductoUseCases from "../../application/productos.usecases";
//repository:
import ProductoRepository from "../../domain/producto.repository";
import ProductoRepositoryCSV from "../adapters/producto.repository.csv";

//Router:
const router = express.Router()
//Implementation:
const productoRepository: ProductoRepository = new ProductoRepositoryCSV()
const productoUseCases: ProductoUseCases = new ProductoUseCases(productoRepository)
//Petitions:
router.get("/", async (req: Request, res: Response) => {
    try {
        const data = await productoUseCases.getAll()
        //aqui se puede ejecutar una funcion 'save' para insertar los datos en la base de datos
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

export { router as routerProducto };