import List from './List.jsx'

function App() {
  const fruits = [{id: 1, name: 'Apple', calories: 95}, 
                  {id: 2, name: 'Banana', calories: 105}, 
                  {id: 3, name: 'Pineapple', calories: 37 }, 
                  {id: 4, name: 'Coconut', calories: 159},
                  {id: 5, name: 'Orange', calories: 45}]
  
  const vegetables = [{id: 6, name: 'Potatoes', calories: 110}, 
                      {id: 2, name: 'Celery', calories: 15}, 
                      {id: 3, name: 'Carrots', calories: 25}, 
                      {id: 4, name: 'Corn', calories: 63},
                      {id: 5, name: 'Brocccoli', calories: 50}]

  return(
    <>
        <List items={fruits} category='Fruits'/>
        <List items={vegetables} category='Vegetables'/>
        </>

  )
}

export default App
