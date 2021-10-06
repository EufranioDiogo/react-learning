const Greet = ({ name, heroName, children }) => {
  return (
    <>
      <h1>
        Hello {name} and he/she favorite hero is {heroName}
      </h1>
      {children}
    </>

  )
}

export default Greet;