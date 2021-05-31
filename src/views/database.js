const mysql = require('mysql')

const pool=mysql.createPool(database);
  pool.getConnection((err,connection)=>{
    if(err){
      if(err.code === 'PROTOCOL_CONNECTION_LOST'){
        console.error('database connection was close')
      }
      if(err.code==='ER_CON_COUNT_ERROR'){
        console.error('adat base to many conection')
      }
      if(error.code === 'ENCONREFUSED'){
        console.error('databaseconection was refuse')
      }
    }

    if(connection) connection.release();
    console.log('connected')
    return
  })

  module.exports=pool