const data = {
   users: [
      {
         id: 1,
         age: 29,
         name: 'Marek',
         gender: 'male'
      },
      {
         id: 2,
         age: 15,
         name: 'Marta',
         gender: 'female'
      },
      {
         id: 3,
         age: 42,
         name: 'Apolonia',
         gender: 'female'
      },
      {
         id: 4,
         age: 23,
         name: 'Kamil',
         gender: 'male'
      }]
};

const FilteredList = ({ user }) => {
   return (
      <div>
         <h2>{user.name}</h2>
         <p>Informacje o użytkowniku</p>
         <p>Wiek: <strong>{user.age}</strong></p>
         <p>Płeć: {user.gender}</p>
      </div>
   )
}

class UsersList extends React.Component {

   state = {
      select: 'all'
   }

   handleFilterUsers = (option) => {
      this.setState({
         select: option
      })
   }

   showUsers = () => {
      let users = this.props.data;

      switch (this.state.select) {
         case 'all':
            return users.map(user => <FilteredList key={user.id} user={user} />)
         case 'female':
            users = users.filter(user => user.gender === 'female')
            return users.map(user => <FilteredList key={user.id} user={user} />)
         case 'male':
            users = users.filter(user => user.gender === 'male')
            return users.map(user => <FilteredList key={user.id} user={user} />)
      }
   }

   render() {
      return (
         <>
            <button onClick={() => this.handleFilterUsers('all')}>Wszyscy</button>
            <button onClick={() => this.handleFilterUsers('female')}>Kobiety</button>
            <button onClick={() => this.handleFilterUsers('male')}>Mężczyźni</button>
            {this.showUsers()}
         </>
      )
   }
}

ReactDOM.render(<UsersList data={data.users} />, document.getElementById('root'));