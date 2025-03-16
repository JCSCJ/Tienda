Hola profesor, en este proceso estoy intentando realizar un sistema 
de gestion de productos,hasta este punto he hecho uso de MongoDB, 
Express, Node.js y React.

Instalacion:

1️⃣Clonar el repositorio:
git clone https://github.com/JCSCJ/Tienda.git
cd Tienda

2️⃣Instalar dependencias:
npm install

3️⃣Configurar variables de entorno:
Crea un archivo .env en la raíz del proyecto y agrega:
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

4️⃣Poblar la base de datos con productos:
node seed.js

5️⃣iniciar el servidor:
npm start

6️⃣Se puede probar la API:
http://localhost:5000/api/products

🙏 Disculpa: Actualmente el proyecto, solo cuenta con las operaciones GET y POST. 

Contaba con grupo para realizar la actividad pero esta semana no enviaron ningun mensaje sobre la tarea 😞
