Hola profesor, en este proceso estoy intentando realizar un sistema 
de gestion de productos,hasta este punto he hecho uso de MongoDB, 
Express y Node.js.

Instalacion:

1️⃣Clonar el repositorio:
git clone https://github.com/JCSCJ/Tienda.git
cd Tienda

2️⃣Instalar dependencias:
npm install

3️⃣Configurar variables de entorno:
El archivo .env ya está en el proyecto, solo debe modificarlo con sus propios datos:
MONGO_URI=tu_conexion_mongodb
PORT=5000

📌 Configuración de MongoDB Atlas

🔹Si el profesor ya tiene MongoDB Atlas
Solo debe agregar su MONGO_URI en el archivo .env.

🔹Si el profesor NO tiene MongoDB Atlas, debe crear un clúster:

Ir a MongoDB Atlas y crear una cuenta (si no tiene).

Crear un nuevo clúster gratuito en la nube.

Ir a "Database Access" y agregar un usuario con permisos de lectura y escritura.

Ir a "Network Access" y permitir conexiones desde 0.0.0.0/0 (o su IP).

Copiar la cadena de conexión en Database > Connect > Drivers y usarla en MONGO_URI.

4️⃣ Poblar la base de datos con productos automáticamente:
Los productos se insertan automáticamente al iniciar el servidor si la base de datos está vacía.

5️⃣iniciar el servidor:
npm start

6️⃣ Probar la API:

Obtener todos los productos: GET http://localhost:5000/api/products

Obtener un producto por ID: GET http://localhost:5000/api/products/id

Agregar un nuevo producto: POST http://localhost:5000/api/products

Actualizar un producto por ID: PUT http://localhost:5000/api/products/id

Body (JSON):
{
        "_id": "67e30afcc21d84407d24c30b",
        "name": "Apple TV 4K",
        "price": 699,
        "image": "https://www.apple.com/co/buy/images/products/tv/apple_4k_wifi__fpjm9mmlrzyy_large.jpg",
        "stock": 8,
        "__v": 0
}

Eliminar un producto por ID: DELETE http://localhost:5000/api/products/:id


🙏 Nota: Ahora el proyecto cuenta con operaciones GET, POST, PUT y DELETE para la gestión de productos.


📌 Situación del grupo: Contaba con un grupo para realizar la actividad, pero no volvieron a enviar ningun mensaje. 😞
