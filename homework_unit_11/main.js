// Example 1
// option 1
const result = []
const loopArray = (words, time) => {
  for (let i = 1; i <= time; i++) {
    result.push(words)
  }

  return result
}

//option 2
const result = []
const dublicate = (words, time) => {
  for (let i = 1; i <= time; i++) {
    result.splice(result.length, 0, words)
  }

  return result
}

// Example 2
const newArr = []
const reverseArray = array => {
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i])
  }

  return newArr
}

// Example 3
const deleteFalsyInArray = array => {
  const result = array.filter(value => value)

  return result
}

// Example 4

const convertArrayToObject = array => {
  const newObject = {}
  array.forEach(arr => {
    newObject[arr[0]] = arr[1]
  })

  return newObject
}

// Example 5
const sortArray = array => {
  if (!(Array.isArray(array)) || array.length < 1) {
    return `data false`
  }

  return array.sort()
}

// Example 6
const checkIsObject = value => !!value && value.constructor === Object
// Example 7
const getValueObject = (object, array) => {
  const newObject = {}
  for (let key in object) {
    newObject[key] = object[key]
  }

  for (let key in newObject) {
    array.forEach(valueArr => {
      if (key === valueArr) {
        delete newObject[key]
      }
    })
  }
  return newObject
}

// Example 8
const deleteElementInArray = array => {
  if (!(Array.isArray(array)) || array.length < 5) {
    return `data false`
  }

  array.splice(1, 2)
  return array
}

// Example 9
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

const checkArray = array => {
  var newArray = []
  array.forEach(student => {
    const { name, score } = student
    const checkFirstName = name => {
      const lastSpacing = name.lastIndexOf(' ')
      const firstName = name.slice(0, lastSpacing)
      return firstName.indexOf('Duy') == -1 ? true : false
    }
    if (score <= 5 || !(checkFirstName(name))) {
      newArray.push('Fail')
    } else {
      newArray.push('Pass')
    }
  })
  return newArray
}

// Example 10
const findStudents = students => {
  const newArray = []
  students.forEach(student => {
    const scores = String(student.score)
    const [firstNum, lastNum] = score.split('.')
    const sum = Number(firstNum) + Number(lastNum)
    if (sum % 10 > 5) {
      newArray.push(student)
    }
  })
  return newArr
}
