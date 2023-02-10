import { Box } from "@mui/material";
import endPoint from "api/index.js";
const UserImage = ({image,size = "60px"}) => {
    return (
        <Box width={size} height={size}>
            <img
                style={{objectFit:"cover", borderRadius: "50%"}}
                width={size}
                height={size}
                alt="user"
                src={`https://sociopedia-awoodsford.b4a.run/assets/${image}`}
            />
            
        </Box>
    );
};

export default UserImage;