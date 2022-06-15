let dataAmounts = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
]
let days = document.querySelectorAll('[data-day]')
let data = new Date()

let option = { weekday: 'long'};
let stringDate = data.toLocaleDateString('en-US', option)

for (let i = 0; i < dataAmounts.length; i++) {
let height
  days.forEach( day => {
    height = dataAmounts[i].amount
        if (day.dataset.day == dataAmounts[i].day) {
      day.dataset.amount = '$' + height
      day.style.height = height + 'px'
    } 

    if(stringDate.toLowerCase().includes(day.dataset.day)){
      day.style.background = 'hsl(186, 34%, 60%)'

      day.addEventListener('mouseover',() => {
        day.style.background = 'hsl(186, 34%, 60%, 0.6)'
      })

      day.addEventListener('mouseout',() => {
        day.style.background = 'hsl(186, 34%, 60%)'
      })
    }
    
})
}


