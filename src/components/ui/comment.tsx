export const Comment: React.FC<{ comment: string }> = ({ comment }) => (
  <div>
    <div className="rounded border border-slate-300 bg-slate-50 px-3 py-2">
      <p className="font-semibold">Commentaire</p>
      <p>{comment}</p>
    </div>
  </div>
);
