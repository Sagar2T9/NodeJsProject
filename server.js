const express= require("express");
const app=express()
const PORT= process.env.PORT || 5002

//Importing the router
const employeeRouter= require("./routers/employee-router");

app.listen(PORT,()=>{
    console.log(`app running on port ${PORT}`)
})


//Using the router
app.use(express.json());
app.use('/api/emp', employeeRouter);
app.use('/*', (req, res) => {
    res.send('404 Page not found');
});
