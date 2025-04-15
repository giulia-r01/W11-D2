const MyFooter = function () {
  return (
    <footer className="text-center small prince py-2">
      <p className="mb-0 text-white">
        Armageddon - <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  )
}

export default MyFooter
