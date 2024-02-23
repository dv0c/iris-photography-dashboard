import Page from "@/components/Page";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

const page = ({}) => {

    const Action = () => (
    <Button className="btn btn-primary">
        <PlusIcon className="w-5 h-5 mr-2" />
        Create Image
    </Button>
    )

  return <Page title="Images" description="Create and manage images." action={<Action />}>
    content
  </Page>;
};

export default page;
