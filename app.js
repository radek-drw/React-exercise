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

const FilteredUser = ({ name, age, gender } = props) => {
   return (
      <div>
         <h2>{name}</h2>
         <p>Information about user</p>
         <p>User age: <strong>{age}</strong></p>
         <p>User gender: {gender}</p>
      </div>
   )
}

const UsersList = ({ data }) => {

   const [select, setSelect] = React.useState('');

   const handleFilterButton = option => setSelect(option);

   const showUsers = () => {
      let users = data.users;

      switch (select) {
         case 'all':
            return users.map(user => <FilteredUser key={user.id} {...user} />)
         case 'female':
            users = users.filter(user => user.gender === 'female')
            return users.map(user => <FilteredUser key={user.id} {...user} />)
         case 'male':
            users = users.filter(user => user.gender === 'male')
            return users.map(user => <FilteredUser key={user.id} {...user} />)
      }
   }

   return (
      <>
         <button onClick={() => handleFilterButton('all')}>All</button>
         <button onClick={() => handleFilterButton('female')}>Women</button>
         <button onClick={() => handleFilterButton('male')}>Men</button>
         {showUsers()}
      </>
   )
}

ReactDOM.render(<UsersList data={data} />, document.getElementById('root'));