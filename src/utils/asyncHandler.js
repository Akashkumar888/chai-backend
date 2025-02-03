
// methiod -1 using promises resolve and reject or catch

const asyncHandler=(requestHandler)=>{ 
 (req,res,next)=>{
  Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
 }
}


export {asyncHandler}













// method -2 using try and catch 

// const asyncHandler=()=>{}
// const asyncHandler=(func)=>()=> {}
// const asyncHandler=(func)=> async ()=> {}


// const asyncHandler=(fn) => async (req,res,next)=>{
//  try {
//     await fn(req,res,next)
//  } catch (error) {
//   res.status(error.code || 500).json({
//     success:false,
//     message:error.message
//   })
//  }

// } 



