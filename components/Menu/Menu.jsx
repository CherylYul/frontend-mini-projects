import React from "react"
import useToggle from "../../hooks/useToggle"

const MenuContext = React.createContext()
export { MenuContext }

export default function Menu({ children, onOpen }) {
    const [open, toggleOpen] = useToggle({
        initialValue: true, 
        onToggle: onOpen
    })

    return (
        <MenuContext.Provider value={{ open, toggleOpen }}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

        //   <Menu onOpen={() => console.log("Opened/closed")}>
        //   <Menu.Button>Menu</Menu.Button>
        //   <Menu.Dropdown>
        //     <Menu.Item>Home</Menu.Item>
        //     <Menu.Item>About</Menu.Item>
        //     <Menu.Item>Contact</Menu.Item>
        //     <Menu.Item>Blog</Menu.Item>
        //   </Menu.Dropdown>
        // </Menu>