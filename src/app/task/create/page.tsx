import PageTitle from "@/components/PageTitle";

export default function CreateTaskPage() {
  return (
    <>
      <PageTitle title="タスク作成" />
      <form className="flex flex-col gap-3">
        <div className="flex flex-row gap-2 w-full">
          <label className="w-1/8">タイトル</label>
          <input
            type="text"
            className="w-full max-w-2xs border-1 bg-white p-1"
            id="title"
            name="title"
            placeholder="タイトル"
            required
          />
        </div>
        <div className="flex flex-row gap-2 w-full">
          <label className="w-1/8">詳細</label>
          <textarea
            className="w-full max-w-2xs max-h-24 border-1 bg-white p-1"
            id="description"
            name="description"
            placeholder="詳細"
            required
          ></textarea>
        </div>
        <div className="flex flex-row gap-2 w-full">
          <label className="w-1/8">期限</label>
          <input
            type="date"
            className="w-full max-w-2xs border-1 bg-white p-1"
            id="deadline"
            name="deadline"
            required
          />
        </div>
        <button
          className="w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          作成する
        </button>
      </form>
    </>
  );
}
