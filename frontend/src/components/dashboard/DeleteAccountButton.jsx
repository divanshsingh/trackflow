import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function DeleteAccountButton() {
    const router = useRouter();

    const executeDelete = async () => {
        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
            const response = await axios.delete(
                `${API_URL}/api/auth/delete-account`,
                { withCredentials: true } // Cookie bhejne ke liye zaroori hai
            );

            toast.success(response.data.message);
            router.push("/signup"); // Delete hone ke baad login page par bhej dein
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to delete account");
        }
    };

    const handleDeleteClick = () => {
            // Sonner toast ke andar action buttons de rahe hain
            toast("Are you sure you want to delete your account?", {
                description: "This action cannot be undone.",
                action: {
                    label: "Delete",
                    onClick: () => executeDelete(),
                },
                cancel: {
                    label: "Cancel",
                },
                duration: Infinity,
            });
        };    

    return (
        <Button 
            onClick={handleDeleteClick}
            variant="destructive"
            className="bg-red-600 hover:bg-red-500 text-white"
        >
            Delete Account
        </Button>
    );
}