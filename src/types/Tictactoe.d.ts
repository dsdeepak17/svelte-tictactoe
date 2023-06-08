export type turnType = 'x' | 'o';
export type turnComplementType = {
	[key in turnType]: turnType;
};
