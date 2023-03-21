import Producto from "./Producto"

export default interface ProductoRepository {
    getAll(): Promise<Producto[]>
    getByParams(producto: Producto): Promise<Producto[]>
} 