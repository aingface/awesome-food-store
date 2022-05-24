import {Store,StoreModal} from './interface'

export const dummyStore:Store={
  id:-(Number.MAX_SAFE_INTEGER),
  name:'dummy-name',
  description:'dummy-description',
  thumb:'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480',  
  url:'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987'
}

export const dummyStoreModal:StoreModal={
  id:-(Number.MAX_SAFE_INTEGER),
  name:'dummy-name',
  description:'dummy-description',
  thumb:'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480',  
  url:'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987',
  open:false,
}