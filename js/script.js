const Cars = [
    {
        id: 1,
        Name: 'cherry',
        Model: 'arizo6',
        exist: true
    },
    {
        id: 2,
        Name: 'benz',
        Model: 'c200',
        exist: false
    },
    {
        id: 3,
        Name: 'irankhodro',
        Model: 'denaPlus',
        exist: false
    },
    {
        id: 4,
        Name: 'porche',
        Model: 'makan',
        exist: true
    }
]


const res = function (array, modelCar) {
    const indexValue = Cars.findIndex((item, index) => {
        return item.Model === modelCar
    })
    return array[indexValue]
}

   const finalResualt = res(Cars , 'c200')
    console.log(finalResualt)



// const res = Cars.filter((item) => {
//     return item.exist == true
// })

// console.log(res)


