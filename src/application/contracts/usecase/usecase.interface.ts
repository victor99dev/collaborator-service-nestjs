export interface UseCaseInterface<TypeInput, TypeOutput> {
  execute(param: TypeInput): Promise<TypeOutput>;
}
