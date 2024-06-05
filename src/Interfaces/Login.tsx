

interface ILogin
{
    label:string,
    name:string,
    placeholder:string,
    type:string
}

export let LoginInputs:ILogin[]=[
    {
        label:"Email",
        name:"email",
        placeholder:"Email",
        type:"email"
    },
    {
        label:"Password",
        name:"password",
        placeholder:"Password",
        type:"password"
    }
]