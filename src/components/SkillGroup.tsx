/** 技能分组卡片（PRD FR-2）：组名 + 技能标签（名称 · 熟练度）；未配置熟练度则只显示名称 */
import TagChip from "./TagChip";
import type { SkillGroup as SkillGroupData } from "../data/profile";

export default function SkillGroup({ group }: { group: SkillGroupData }) {
  return (
    <div className="card p-5">
      <h3 className="mb-3 font-semibold text-ink">{group.category}</h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map((s) => (
          <TagChip key={s.name}>
            {s.name}
            {s.level && <span className="ml-1.5 text-ink-3">{s.level}</span>}
          </TagChip>
        ))}
      </div>
    </div>
  );
}
