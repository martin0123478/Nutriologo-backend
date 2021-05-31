

const controller = {}

controller.list = (req,res)=>{
  req.getConnection((err,conn)=>{
    conn.query('SELECT * FROM user',(err,customers)=>{
      if(err){
        res.json(err)
      }
      console.log(customers)
      res.send('Lista desde get')
    })
  })
}

controller.save= (req,res)=>{
  
  const data = req.body
  req.getConnection((err,conn)=>{
    
    conn.query('INSERT INTO user set ?',[data],(err,user)=>{
      console.log(user)
      res.send('works')
    })
  })
  
}



module.exports = controller