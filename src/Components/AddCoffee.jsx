import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get('name');
        const chef = formData.get('chef');
        const supplier = formData.get('supplier');
        const taste = formData.get('taste'); 
        const category = formData.get('category');
        const details = formData.get('details');
        const photo = formData.get('photo');
        const coffee = {name, chef, supplier, taste, category, details, photo} ;
        console.log(coffee);  
        fetch('http://localhost:5000/add-coffees',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Your Coffee was successfully Added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                form.reset();
            }
        })
    }
    return (
        <div className="w-8/12 mx-auto py-10">
            <button><Link className="flex items-center gap-1 text-lg py-2 px-5" to="/"> <IoMdArrowBack /> Back To Home</Link></button>
            <div className="bg-yellow-950 bg-opacity-10 p-20">
                <div className="text-center w-8/12 mx-auto mb-10">
                    <h1 className="font-semibold text-4xl mb-5">Add Coffee</h1>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleAddCoffee}>
                    {/* Input Name And Chef */}
                    <div className="flex justify-between gap-10 mb-5">
                        <div className="w-1/2">
                            <label htmlFor="name" className="font-bold text-lg">Name</label>
                            <input className="block w-full py-3 px-4 mt-2 rounded outline-none" placeholder="Enter Your Coffee Name" type="text" name="name" id="name" />
                        </div>

                        <div className="w-1/2">
                            <label htmlFor="chef" className="font-bold text-lg">Chef</label>
                            <input className="block w-full py-3 px-4 mt-2 rounded outline-none" placeholder="Enter Your Coffee Chef" type="text" name="chef" id="chef" />
                        </div>
                    </div>
                    {/* Input Supplier And Taste */}
                    <div className="flex justify-between gap-10 mb-5">
                        <div className="w-1/2">
                            <label htmlFor="supplier" className="font-bold text-lg">Supplier</label>
                            <input className="block w-full py-3 px-4 mt-2 rounded outline-none" placeholder="Enter Your Coffee Supplier" type="text" name="supplier" id="supplier" />
                        </div>

                        <div className="w-1/2">
                            <label htmlFor="taste" className="font-bold text-lg">Taste</label>
                            <input className="block w-full py-3 px-4 mt-2 rounded outline-none" placeholder="Enter Your Coffee Taste" type="text" name="taste" id="taste" />
                        </div>
                    </div>
                    {/* Input Category And Details */}
                    <div className="flex justify-between gap-10 mb-5">
                        <div className="w-1/2">
                            <label htmlFor="category" className="font-bold text-lg">Category</label>
                            <input className="block w-full py-3 px-4 mt-2 rounded outline-none" placeholder="Enter Your Coffee Category" type="text" name="category" id="category" />
                        </div>

                        <div className="w-1/2">
                            <label htmlFor="details" className="font-bold text-lg">Details</label>
                            <input className="block w-full py-3 px-4 mt-2 rounded outline-none" placeholder="Enter Your Coffee Details" type="text" name="details" id="details" />
                        </div>
                    </div>
                    {/* Input Photo */}
                    <div className="mb-5">
                        <label htmlFor="photo" className="font-bold text-lg">Photo</label>
                        <input className="block w-full py-3 px-4 mt-2 rounded" placeholder="Enter Your Coffee Photo URL" type="text" name="photo" id="photo" />
                    </div>
                    {/* Add Btn */}
                    <input className="w-full py-3 px-4 mt-2 rounded bg-orange-300 text-yellow-950 font-bold text-lg" type="submit" value="Add Coffee" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;