require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch(err => console.error("❌ Error al conectar MongoDB:", err));


const products = [
    { name: "iPhone 16 Pro", price: 999, image: "https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16pro__erw9alves2qa_xlarge.png", stock: 10 },
    { name: "iPhone 16", price: 899, image: "https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16__c5bvots96jee_xlarge.png", stock: 15 },
    { name: "iPhone 16e", price: 799, image: "https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16e__cubm3xoy5qaa_xlarge.png", stock: 20 },
    { name: "iPhone 15", price: 699, image: "https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_15__buwagff0mwwi_xlarge.png", stock: 25 },
    { name: "iPad Pro", price: 699, image: "https://www.apple.com/co/buy/images/products/ipad/pt_ipad_pro__6bgrkek0jnm2_xlarge.png", stock: 12 },
    { name: "iPad Air", price: 699, image: "https://www.apple.com/co/buy/images/products/ipad/pt_ipad_air__cr381zljqdiu_xlarge.png", stock: 14 },
    { name: "iPad", price: 699, image: "https://www.apple.com/co/buy/images/products/ipad/pt_ipad_10th_gen__ej5p5x6yf2gm_xlarge.png", stock: 18 },
    { name: "MacBook Air de 13” y 15”", price: 699, image: "https://www.apple.com/co/buy/images/products/mac/product_tile_mba_13_15__fx2g3qlubdym_large.png", stock: 8 },
    { name: "MacBook Pro de 14” y 16”", price: 699, image: "https://www.apple.com/co/buy/images/products/mac/product_tile_mbp_14_16__bkl8zusnkpw2_large.png", stock: 7 },
    { name: "iMac", price: 699, image: "https://www.apple.com/co/buy/images/products/mac/product_tile_imac_24__inq0od011wuq_large.png", stock: 10 },
    { name: "Mac mini", price: 699, image: "https://www.apple.com/co/buy/images/products/mac/product_tile_mac_mini__c4284n3j25w2_large.png", stock: 6 },
    { name: "Mac Studio", price: 699, image: "https://www.apple.com/co/buy/images/products/mac/product_tile_mac_studio__c24lhkuq4vee_large.png", stock: 5 },
    { name: "Mac Pro", price: 699, image: "https://www.apple.com/co/buy/images/products/mac/product_tile_mac_pro__6q3qt8073f6e_large.png", stock: 4 },
    { name: "Studio Display", price: 699, image: "https://www.apple.com/co/buy/images/products/mac/product_tile_studio_display__c0gbtkgtsx0m_large.png", stock: 9 },
    { name: "Pro Display XDR", price: 699, image: "https://www.apple.com/co/buy/images/products/mac/product_tile_pro_display__duklzyfwl92e_large.png", stock: 3 },
    { name: "Apple Watch SE", price: 699, image: "https://www.apple.com/co/buy/images/products/watch/product_se__frx4hb13romm_xlarge.png", stock: 15 },
    { name: "Apple Watch Series 10", price: 699, image: "https://www.apple.com/co/buy/images/products/watch/product_s10__deak4mdempoy_xlarge.png", stock: 12 },
    { name: "AirPods 4", price: 699, image: "https://www.apple.com/co/buy/images/products/airpods/compare_airpods_4__fy4e25bzx1u2_large.png", stock: 20 },
    { name: "AirPods Pro 2", price: 699, image: "https://www.apple.com/co/buy/images/products/airpods/compare_airpods_pro_2__c3r137ebxwae_large.png", stock: 18 },
    { name: "AirPods Max", price: 699, image: "https://www.apple.com/co/buy/images/products/airpods/compare_airpods_max__b14s2x6q07rm_large.png", stock: 10 },
    { name: "Apple TV 4K", price: 699, image: "https://www.apple.com/co/buy/images/products/tv/apple_4k_wifi__fpjm9mmlrzyy_large.jpg", stock: 8 }
];

const seedDB = async () => {
    try {
        await Product.deleteMany(); 
        await Product.insertMany(products); 
        console.log("✅ Productos insertados correctamente en la base de datos");
    } catch (error) {
        console.error("Error insertando productos:", error);
    }
};

seedDB();
