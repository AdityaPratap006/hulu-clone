import { ComponentProps, ComponentType } from "react";

interface Props {
	title: string;
	icon: ComponentType<ComponentProps<"svg">>;
}

const AppHeaderItem = ({ title, icon: Icon }: Props) => {
	return (
		<div className="flex flex-col items-center gap-1 group cursor-pointer w-12 sm:w-20 text-onNeutralBg hover:text-onPrimaryBgSofter">
			<Icon className="h-8 group-hover:animate-bounce" />
			<p className="opacity-0 group-hover:opacity-100 tracking-widest">
				{title}
			</p>
		</div>
	);
};

export default AppHeaderItem;
