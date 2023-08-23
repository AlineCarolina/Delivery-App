function Header({ client }: any) {
    return (
        <header>
            {
                client === "customer"
            }
        </header>
    )
}

export default Header;