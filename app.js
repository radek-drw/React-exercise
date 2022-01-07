const data = {
   users: [
      {
         id: 1,
         age: 29,
         name: 'Mark',
         gender: 'male'
      },
      {
         id: 2,
         age: 15,
         name: 'Siobhan',
         gender: 'female'
      },
      {
         id: 3,
         age: 42,
         name: 'Sinead',
         gender: 'female'
      },
      {
         id: 4,
         age: 23,
         name: 'James',
         gender: 'male'
      }]
};

const FilteredUser = ({ user }) => {
   return (
      <div>
         <h2>{user.name}</h2>
         <p>Information about user</p>
         <p>User age: <strong>{user.age}</strong></p>
         <p>User gender: {user.gender}</p>
      </div>
   )
}

class UsersList extends React.Component {

   state = {
      select: 'all'
   }

   handleFilterButton = (option) => {
      this.setState({
         select: option
      })
   }

   showUsers = () => {
      let users = this.props.data.users;

      switch (this.state.select) {
         case 'all':
            return users.map(user => <FilteredUser key={user.id} user={user} />)
         case 'female':
            users = users.filter(user => user.gender === 'female')
            return users.map(user => <FilteredUser key={user.id} user={user} />)
         case 'male':
            users = users.filter(user => user.gender === 'male')
            return users.map(user => <FilteredUser key={user.id} user={user} />)
      }
   }

   render() {
      return (
         <>
            <button onClick={() => this.handleFilterButton('all')}>All</button>
            <button onClick={() => this.handleFilterButton('female')}>Women</button>
            <button onClick={() => this.handleFilterButton('male')}>Men</button>
            {this.showUsers()}
         </>
      )
   }
}

ReactDOM.render(<UsersList data={data} />, document.getElementById('root'));