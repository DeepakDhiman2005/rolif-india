import { Button } from "@material-tailwind/react";

/**
 * @param {Object} props
 * @param {Function} props.onClick
 * @param {string} props.className
 * @param {'button' | 'reset' | 'submit'} props.type
 * @param {React.ReactNode} props.children
 * @returns 
 */
const MyButton = ({
    onClick = () => { },
    className = "",
    children,
    type = "button"
}) => {
    return <>
        <Button
            type={type}
            className={`cursor-pointer shadow-none hover:shadow-sm normal-case font-medium text-[15px] py-2 rounded-sm ${className}`}
            onClick={onClick}
        >{children}</Button>
    </>
}

export default MyButton;