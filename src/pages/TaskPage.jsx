import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [SearchParams] = useSearchParams();
  const title = SearchParams.get("title");
  const description = SearchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-400 flex justify-center p-6">
      <div className="w-[700px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)} // usado pra voltar na pagina anterior
            className="absolute left-0 top-0 bottom-0"
            style={{ cursor: "pointer" }} //muda o formato da seta do mouse sempre quando passar em botões clicaveis
          >
            <ChevronLeft />
          </button>
          <Title>Detalhes da tarefa</Title>
        </div>
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
          <h2 className="text-slate-950 text-2xl">{title}</h2>
          <p className="text-slate-800">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
