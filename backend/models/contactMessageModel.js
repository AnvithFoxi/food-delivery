import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Full name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email address is required"],
        unique: false, // You may allow multiple messages from the same email
        lowercase: true,
        validate: {
            validator: function (email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Simple email validation
            },
            message: (props) => `${props.value} is not a valid email!`,
        }
    },
    message: {
        type: String,
        required: [true, "Message is required"],
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const contactMessageModel = mongoose.models.contactMessage || mongoose.model('contactMessage', contactMessageSchema);
export default contactMessageModel;
