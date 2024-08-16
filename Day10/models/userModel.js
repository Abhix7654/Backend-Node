const userModel=new mongoose.schema(
        {
                firstname:{
                        type:String,
                        required:[true,"First name is required"],
                        trim:true,
                        minLength:[3,"First name should be atleast 3 characters long"],
                        Maxlength:[25,"First name should be atmost 25 characters long"],
                },
                password:{
                        type:String,
                        required:[true,"Password is required"],
                        trim:true,
                        minLength:[8,"Password should be atleast 8 characters long"],
                        Maxlength:[25,"Password should be atmost 25 characters long"],
                },
                email:{
                        type:String,
                        required:[true,"Email is required"],
                        trim:true,
                        unique:true,
                      match:[/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,"Email is not valid"]
                },
                contact:{
                        type:String,
                        required:[true,"Contact is required"],
                        trim:true,
                        unique:true,
                        match:[/^\d{10}$/,"Contact is not valid"]

                },
                gender:{
                        type:String,
                        enum:[male,female,others],
                        require:[true,"gender is required"]

                }
        }
)