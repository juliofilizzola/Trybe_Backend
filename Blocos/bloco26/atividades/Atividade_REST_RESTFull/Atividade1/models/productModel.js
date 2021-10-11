const connection = require('./connection');

const add = async (name, brand) => {
  try {
    const [result] = await connection.query(
      'INSERT INTO products (name, brand) VALUES (?, ?);', [name, brand]
    );

    return { id: result.insertId, name, brand };
  } catch (error) {
    console.error(error);
    return process.exit(1);
  }
};


const getAll = async () => {
  try {
    const [rows] = await connection.query(`SELECT * FROM products`);
    return rows;
  } catch (error) {
    console.error(error);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const [result] = await connection.query(`SELECT * FROM products WHERE id = ?`, [id]);
    if (!result.length) return null;
    return result[0];
  } catch (error) {
    console.error(error);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    await connection.query('UPDATE products SET name = ?, brand = ? WHERE id = ?', [name, brand, id]);
  } catch (error) {
    console.error(error);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const products = await getById(id);
    if(!products) return {};
    await connection.query('DELETE FROM products WHERE id = ?', [id]);
    return products;
  } catch (error) {
    console.error(error);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };