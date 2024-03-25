export const Comment: React.FC<{ comment: string }> = ({ comment }) => {
    return (
        <div>
            <div className="py-2 px-3 border rounded bg-slate-50 border-slate-300">
                <p className="font-semibold">Commentaire</p>
                <p>{comment}</p>
            </div>
        </div>
    )
}