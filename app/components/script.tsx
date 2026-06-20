//string, numbers, boolean, object, array, null, undefined, void, any

let myName: string = "Nimi"
myName = "Nimi"

let count: string | number = 30
count = "kolu"

// const arr1 : Array<number|string> = [1,2,3,4,5]
// const arr1 : number[] = [1,2,3,4,5]
const arr1: (number | string)[] = [1, 2, 3, 4, 5, "six"]


const arr2: (string)[] = ["nimi", "pami", "ayo"]

arr1.push("seven")

const tupTest: [string, number, boolean] = ["Nimi", 30, true]

const user: { fullname: string, age: number, height: string, career?: string } = {
    fullname: "Nimi",
    age: 30,
    height: "5'6ft",
    career: "Engineer"
};

console.log(user.career);

const addNum = (num1: number, num2: number): void | string => {
    const newNum = num1 + num2;
    return String(newNum);
};

type User = {
    fullname: string;
    age: number;
    height: string;
    career?: string;
    car?:{
        color:string,
        engine:string,
        model:string,
        seats:number[]
    }
};

type pickedCar = Pick<User, "car">

type UserExcludingCar = Omit<User, "car"| "career">

type SimpleUser = Pick<User, "fullname" | "age">;

const simpleMe: SimpleUser = {
    fullname: "Nimi",
    age: 30
}


type UserWithEmail = User & {
    email: string 
}

// interface User {
//     fullname: string;
//     age: number;
//     height: string;
//     career?: string;
// }

const allUsers: User[] = [
    {
        fullname: "Nimi",
        age: 30,
        height: "5'6ft",
        career: "Engineer"
    },

    {
        fullname: "Nimi",
        age: 30,
        height: "5'6ft",
        career: "Engineer"
    },

    {
        fullname: "Nimi",
        age: 30,
        height: "5'6ft",
        career: "Engineer"
    },

    {
        fullname: "Nimi",
        age: 30,
        height: "5'6ft",
        career: "Engineer"
    }
]

// interface UserWithRole extends User{
//     isAdmin:boolean

// }

type UserWithRole = User &{
    isAdmin:boolean
}

// const admin:UserWithRole ={
//     fullname: "",
//     age: 0,
//     isAdmin:true
        
// }

// const result : []= [
//     1,2,3,4,"nimi"
// ]

// omit, pick

type Product =   {
    "id": number
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
    "rating": {
      "rate": number,
      "count": number,
    }
}

type complexProduct =     {
      "id": number,
      "title": string,
      "description": string,
      "category": string,
      "price": number,
      "discountPercentage": number,
      "rating": number,
      "stock": number,
      "tags": string[],
      "brand": string,
      "sku": string,
      "weight": number,
      "dimensions": {
        "width": number,
        "height": number,
        "depth": number
      },
      "warrantyInformation": string,
      "shippingInformation": string,
      "availabilityStatus": string,
      "reviews": RatingDeets[],
      "returnPolicy": string,
      "minimumOrderQuantity": number,
      "meta": {
        "createdAt": string,
        "updatedAt": string,
        "barcode": string,
        "qrCode": string
      },
      "thumbnail": string,
      "images": string[]
    }

    type RatingDeets={
        
          "rating": number,
          "comment": string,
          "date": string,
          "reviewerName": string,
          "reviewerEmail": string
    }


