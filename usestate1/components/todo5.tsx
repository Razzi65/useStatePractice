
import { Flex, Spacer } from '@chakra-ui/react'
import { useState } from 'react'

const Todo5 = () => {


    return (

        <Flex borderRadius={"5"} marginLeft={"400"} marginTop={"100"} bg='teal' w='50%' h='500px' p={4} color='white' justifyContent={"center"}>

            <div> <h1 className='mt-3 mb-3 text-center'> To-do App</h1>
                <div className="input-group mb-3">
                <input type="text"  className="form-control" placeholder="Write Task" aria-label="Recipient's username" aria-describedby="button-addon2" />

                <button  type="button" className="btn btn-primary">+</button>

                </div>
            </div>
        </Flex>
    )
}

export default Todo5