import Producto from "../domain/Producto";
import ProductoRepository from "../domain/producto.repository";

export default class ProductoUseCases {

    productoRepository: ProductoRepository;

    constructor(productoRepository: ProductoRepository) {
        this.productoRepository = productoRepository
    }

    getAll(): Promise <Producto[]> {
        return this.productoRepository.getAll()
    }

    getByParams(producto: Producto): Promise <Producto[]> {
        return this.productoRepository.getByParams(producto)
    }
}