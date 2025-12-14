import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchInput = () => {
  return (
    <div className="flex items-center gap-2">
        <Input 
            type="text"
            placeholder="Pesquise serviços ou barbearias"
            className="border-border rounded-full"
        />
        <Button 
            variant="outline"
            size="icon"
            className="rounded-full bg-green-950 text-white"
        >
            <SearchIcon />
        </Button>
    </div>
  );
}

export default SearchInput;