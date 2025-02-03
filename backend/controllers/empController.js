
const empModel = require("../models/empModels")




// const empSave = async (req, res) => {
//     try {
//         console.log(req.body); // Log only request body instead of whole request

//         res.send("Server is working");
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).send("Internal Server Error");
//     }
// };


// const empSave = async (req, res) => {
    // try {
    //     const { empno, empname, empcity, empsubject } = req.body;

        // Validate required fields
        // if (!eno || !ename || !ecity || !esub) {
        //     return res.status(400).json({ message: "All fields are required" });
        // }

        // Create new employee record
//         const data = await empModel.create({
//             empno: empno,
//             empname: empname,
//             empcity: empcity,
//             empsubject: empsubject
//         });

//         res.status(201).json({
//             message: "Employee saved successfully",
//             employee: data
//         });

//     } catch (error) {
//         console.error("Error saving employee:", error);
//         res.status(500).json({ message: "Internal Server Error", error: error.message });
//     }
// };

const empSave = async(req,res)=>{
    const {empno,empname,empcity,empsubject} =req.body;

    const Data = await empModel.create({
        empno: empno,
             empname: empname,
           empcity: empcity,
             empsubject: empsubject
    })

    res.status(200).json(Data)
}



// const empDisplay = async (req, res) => {
//     try {
//         const data = await empModel.find();

//         // Check if data exists
//         if (!data || data.length === 0) {
//             return res.status(404).json({ message: "No employee data found" });
//         }

//         res.status(200).json({
//             message: "Data found successfully",
//             employees: data
//         });

//     } catch (error) {
//         console.error("Error fetching employee data:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };



const empDisplay = async(req,res)=>{
    try{
      const Data = await empModel.find()

      res.send(Data)
    }
    catch(err){
      res.send("data not found")
    }
}

const empDelete = async (req, res) => {
    try {
        const {id}  = req.body; // Extract ID from request body

        if (!id) {
            return res.status(400).json({ message: "Employee ID is required" });
        }

        const data = await empModel.findByIdAndDelete(id);

        if (!data) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json({
            message: "Employee deleted successfully",
            deletedEmployee: data
        });

    } catch (error) {
        console.error("Error deleting employee:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


// const empSearch = async(req,res)=>{
//    const {empno} = req.body;
//    const data = await empModel.find({empno:empno})
//    res.send(data)
// }


const empSearch = async (req, res) => {
    try {
        const { empno } = req.body; // Extract `empno` from request body

        if (!empno) {
            return res.status(400).json({ message: "Employee number is required" });
        }

        // Find employees and sort by `empno` in ascending order
        const data = await empModel.find({ empno }).sort({ empno: 1 }); // 1 for ascending, -1 for descending

        if (data.length === 0) {
            return res.status(404).json({ message: "No employee found with this number" });
        }

        res.status(200).json({
            message: "Employees found",
            employees: data
        });

    } catch (error) {
        console.error("Error searching employee:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// const empEdit = async (req, res) => {
//     const { id } = req.body; // Extract ID from request body

//     if (!id) {
//         return res.status(400).json({ message: "Employee ID is required" });
//     }

//     try {
//         const data = await empModel.findById(id);

//         if (!data) {
//             return res.status(404).json({ message: "Employee not found" });
//         }

//         res.status(200).json({ message: "Employee found", employee: data });

//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// }


const empEdit = async(req,res)=>{
    const myid = req.body.id;
    const Data = await empModel.findById(myid)
    res.send(Data)
}


const empUpdate = async (req, res) => {
    const { _id, empno, empname, empcity, empsubject } = req.body;

    if (!_id) {
        return res.status(400).json({ message: "Employee ID is required" });
    }

    try {
        const data = await empModel.findByIdAndUpdate(_id, {
            empno,
            empname,
            empcity,
            empsubject
        }, { new: true }); // { new: true } ensures the updated document is returned

        if (!data) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json({
            message: "Data successfully updated",
            employee: data
        });

    } catch (error) {
        console.error("Error updating employee:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};




module.exports={
    empSave,
    empDisplay,
    empDelete,
    empSearch,
    empEdit,
    empUpdate
}