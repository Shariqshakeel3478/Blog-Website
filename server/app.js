const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const sql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const JWT_SECRET = "my_super_secret_key_123";



const app = express();



app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));







const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "R113 corniche",
    database: "blog"
});

db.connect((err) => {
    if (err) {
        console.log("❌ Database connection failed:", err.message);
    } else {
        console.log("✅ Database connected!");
    }
});

//authentication


app.post('/signup', async (req, res) => {
    const {
        username,
        email,
        password
    } = req.body


    if (!username || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    const hashedPass = await bcrypt.hash(password, 10)


    const query = "INSERT INTO users(username,email,password) VALUES(?,?,?)"

    db.query(query, [username, email, hashedPass], (err, result) => {
        if (err) {
            console.log("error", err)
            return res.status(400).json({
                message: "User not registered"
            })
        }
        return res.status(200).json({
            message: "user Registered Successfully"
        })
    })

})


app.post('/login', (req, res) => {

    const {
        email,
        password
    } = req.body



    if (!email || !password) {
        return res.status(400).json({
            message: "All Fields are required"
        })

    }



    const query = "SELECT * FROM users where email = ?";
    db.query(query, [email], async (err, result) => {
        if (err) {
            return res.status(400).json({
                message: "user not found"
            })

        }

        const user = result[0]

        const match = await bcrypt.compare(password, user.password)

        if (!match) {
            return res.status(401).json({
                message: "Incorrect password"
            });
        }

        const token = jwt.sign({
                id: user.id,
                email: user.email
            },
            JWT_SECRET, {
                expiresIn: "7d"
            }
        )

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })


        return res.status(200).json({
            message: "user logged in succesfully",
            token
        })

    })

})








// Blog Apis

// 1 Add Blog Post 

app.post('/addblog', (req, res) => {

    const {
        title,
        metaTitle,
        metaDescription,
        category,
        content,
        imageUrl,
        author,
        catId
    } = req.body

    console.log(req.body)

    if (!title || !content || !metaTitle || !metaDescription || !imageUrl || !catId) {
        return res.status(400).json({
            error: "please fill complete details"
        })
    }

    const query = 'INSERT INTO posts(title,content,image,meta_title,meta_des,category_id) VALUES (?,?,?,?,?,?)'

    db.query(query, [title, content, imageUrl, metaTitle, metaDescription, catId], (err, result) => {

        if (err) {
            return res.status(400).json({
                message: "Data is not saved in db"
            })
        }
        return res.status(200).json({
            message: "Data Saved Successfully"
        })
    })


})



// 2. update blog post 

app.put('/blogs/:id', (req, res) => {
    const {
        Blog_title,
        Blog_image,
        Blog_content,
        meta_title,
        meta_description,
        category_id,
        last_updated
    } = req.body;

    const {
        id
    } = req.params;

    const query = `
        UPDATE posts 
        SET title = ?, content = ?, image = ?, meta_title = ?, meta_des = ?, category_id = ?,created_at = ? 
        WHERE id = ?
    `;

    db.query(
        query,
        [Blog_title, Blog_content, Blog_image, meta_title, meta_description, category_id, last_updated, id],
        (err, result) => {
            if (err) {
                console.error("Update error:", err);
                return res.status(400).json({
                    message: "Data is not updated"
                });
            }
            return res.status(200).json({
                message: "Data updated successfully"
            });
        }
    );
});


//3. Show All Blogs;

app.get('/blogs', (req, res) => {

    db.query('SELECT * FROM posts', (err, result) => {
        if (err) {
            return res.status(400).json({
                message: "Cannot display blogs"
            })

        }
        return res.status(200).json(result)

    })
})


// 4.view Single Blog

app.get('/blogs/:id', (req, res) => {

    const {
        id
    } = req.params;

    db.query('SELECT p.*, c.name AS category_name FROM posts p LEFT JOIN categories c ON p.category_id = c.id WHERE p.id = ?', [id], (err, result) => {
        if (err) {
            return res.status(400).json({
                message: "No blog data found"
            })
        }
        return res.status(200).json(result)
    })

})


//delete blog api



app.delete('/deleteBlog/:id', (req, res) => {

    const {
        id
    } = req.params;

    if (!id) {
        res.status(400).json('blog not found')
    }

    const query = 'DELETE FROM posts WHERE id=?'

    db.query(query, [id], (err, result) => {
        if (err) {
            res.status(400).json({
                message: "Query is not working"
            })
        }
        res.status(200).json({
            message: "Blog Deleted Suucessfully"
        })
    })
})


// categories api


app.get('/categories', (req, res) => {
    const query = 'SELECT * FROM categories'
    db.query(query, (err, result) => {
        if (err) {
            return res.status(400).json({
                message: "No data Found"
            })
        }
        return res.status(200).json(result)
    })
})







app.listen(5000, () => {
    console.log("🚀 Server Running on port 5000");
});