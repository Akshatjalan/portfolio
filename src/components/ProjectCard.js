export default function ProjectCard({ project }) {
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col group">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{project.title}</h3>
        </div>
        
        <p className="text-slate-400 mb-6 flex-1 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded-full border border-slate-700">
              {tech}
            </span>
          ))}
        </div>
        
        <a 
          href={project.link} 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm"
        >
          View Project 
          <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}