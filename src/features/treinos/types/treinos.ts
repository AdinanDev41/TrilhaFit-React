// Union types: cada um so aceita valores exatos, previne strings soltas
export type Categoria = 'forca' | 'cardio' | 'mobilidade';
export type Nivel = 'iniciante' | 'intermediario' | 'avancado';
export type GrupoMuscular = 
  'peito' | 'costas' | 'pernas' | 'ombros' | 'bracos' | 'core' | 'cardio';

export interface Exercicio {
  readonly id: string;
  readonly nome: string;
  readonly series: number;
  readonly repeticoes: number;
  readonly descansoSegundos: number;
}

export interface Treino {
  readonly id: string;
  readonly slug: string;
  readonly titulo: string;
  readonly categoria: Categoria;
  readonly grupoMuscular: GrupoMuscular[];
  readonly nivel: Nivel;
  readonly duracaoMinutos: number;
  readonly exercicios: Exercicio[];
  readonly imagemUrl: string;

}

export interface RegistroTreino {
    readonly id: string;
    readonly treinoId: string;
    readonly data: string;
    readonly duracaoMinutos: number;
    readonly cargaTotal: number;
    readonly observacoes?: string;
}