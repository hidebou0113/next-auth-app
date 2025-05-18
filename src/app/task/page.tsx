import PageTitle from "@/components/PageTitle";

type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
  deadline: string;
};

const DUMMY_Task: Task[] = [
  {
    id: "1",
    title: "タスク1タスク1",
    description: "タスク1の詳細",
    status: "未着手",
    deadline: "2021-01-01",
  },
  {
    id: "2",
    title:
      "タスク2タスク2タスク2タスク2タスク2タスク2タスク2タスク2タスク2タスク2タスク2",
    description: "タスク2の詳細タスク2の詳細タスク2の詳細タスク2の詳細",
    status: "未着手",
    deadline: "2021-01-02",
  },
  {
    id: "3",
    title: "タスク3タスク3タスク3タスク3タスク3",
    description:
      "タスク3の詳細タスク3の詳細タスク3の詳細タスク3の詳細タスク3の詳細タスク3の詳細タスク3の詳細タスク3の詳細タスク3の詳細タスク3の詳細タスク3の詳細タスク3の詳細",
    status: "未着手",
    deadline: "2021-01-03",
  },
];

export default function TaskPage() {
  return (
    <>
      <PageTitle title="タスク一覧" />
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-2 w-full border-b border-blue-800">
          <p className="w-1/10">タイトル</p>
          <p className="w-2/3">詳細</p>
          <p className="w-1/10">ステータス</p>
          <p className="w-1/10">期限</p>
        </div>
        {DUMMY_Task.map((task) => (
          <div
            key={task.id}
            className="flex flex-row gap-3 hover:cursor-pointer border-b border-blue-800"
          >
            <div className="w-1/10 group">
              <p className="truncate group-hover:whitespace-normal group-hover:opacity-80">
                {task.title}
              </p>
            </div>
            <div className="w-2/3 group">
              <p className="truncate group-hover:whitespace-normal group-hover:opacity-80">
                {task.description}
              </p>
            </div>
            <div className="w-1/10 group">
              <p className="truncate group-hover:whitespace-normal">
                {task.status}
              </p>
            </div>
            <div className="w-1/10 group">
              <p className="truncate group-hover:whitespace-normal">
                {task.deadline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
