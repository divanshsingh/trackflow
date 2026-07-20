import { FolderPlus } from "lucide-react";
import CreateProjectDialog from "./CreateProjectDialog";



export default function EmptyProjects() {
    return (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-700 bg-zinc-900/40 py-20">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-800">
                <FolderPlus className="h-10 w-10 text-blue-500" />
            </div>
            <h3 className="text-2xl font-semibold text-white">
                No Projects Yet
            </h3>
            <p className="mt-3 max-w-md text-center text-zinc-400">
                Create your first project to start tracking visitors,
                sessions and analytics.
            </p>
            <CreateProjectDialog />
        </div>
    );
}