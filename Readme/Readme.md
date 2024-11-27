# Proyecto de API REST para Gestión de Usuarios, Categorías, Productos y Pedidos

Este proyecto es una API REST desarrollada en Node.js utilizando Sequelize como ORM para interactuar con la base de datos. La API incluye funcionalidades para manejar usuarios, categorías, productos y pedidos, además de características adicionales como middlewares, seeders y tablas intermedias para relaciones entre modelos.

## Tecnologías Utilizadas
- **Node.js**: Entorno de ejecución para el servidor.
- **Express**: Framework para manejar las rutas y middleware.
- **Sequelize**: ORM para la gestión de bases de datos.
- **MySQL/PostgreSQL**: Base de datos relacional.

---

## Funcionalidades Principales

### Usuarios
- **Crear usuario**: Registro de usuarios con encriptación de contraseñas.
- **Iniciar sesión**: Generación de token JWT para autenticación.
- **Cerrar sesión**: Invalidación del token.
- **Información del usuario**: Recuperar datos de usuario junto con sus pedidos y productos asociados.

### Productos
- **Añadir productos**: Asignar productos a categorías.
- **Consultar productos**: Listar productos con sus detalles.

### Categorías
- **Crear, editar y eliminar categorías**.
- **Consultar categorías**: Filtrar por nombre y mostrar productos asociados.

### Pedidos
- **Crear pedidos**: Asociar productos a un pedido mediante una tabla intermedia.
- **Consultar pedidos**: Visualizar pedidos con sus productos detallados.

### Tabla Intermedia
Se ha implementado una tabla intermedia para gestionar la relación **muchos a muchos** entre `orders` y `products`. Esto permite asignar múltiples productos a un pedido y viceversa.

---

## Middlewares

### `isAdmin`
Un middleware que verifica si el usuario tiene permisos de administrador antes de acceder a ciertas rutas específicas. Esto asegura que solo usuarios con permisos adecuados puedan realizar acciones sensibles, como la gestión de recursos críticos.

---

## Seeders

Se han añadido **seeders** para insertar datos iniciales en la base de datos. Esto incluye artículos predefinidos para facilitar el desarrollo y pruebas de la aplicación.

---
## Endpoints

### Usuarios
- **POST /users**: Crear un nuevo usuario.
- **POST /users/login**: Autenticar usuario.
- **POST /users/logout**: Cerrar sesión.
- **GET /users/me**: Obtener información del usuario autenticado.

### Productos
- **POST /products**: Crear un nuevo producto.
- **GET /products**: Listar todos los productos.

### Categorías
- **POST /categories**: Crear una nueva categoría.
- **PUT /categories/:id**: Actualizar una categoría.
- **DELETE /categories/:id**: Eliminar una categoría.
- **GET /categories**: Listar todas las categorías con productos asociados.

### Pedidos
- **POST /orders**: Crear un nuevo pedido.
- **GET /orders**: Listar todos los pedidos con productos.

## Instalación

1. Clonar el repositorio:
   git clone https://github.com/tu-usuario/tu-repositorio.git

2. Instala las dependencias:
   npm install

3. Configura la base de datos en el archivo config/config.json.

4. Ejecuta las migraciones:
   npm sequelize db:migrate

5. Carga los datos iniciales (seeders):
   npm sequelize db:seed:all

6. Inicia el servidor:
   npm start


## Pruebas
- Utiliza herramientas como Postman para probar los endpoints mencionados. Los endpoints protegidos requieren un token JWT para autenticación.

