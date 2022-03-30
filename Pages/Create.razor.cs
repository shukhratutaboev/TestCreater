using Markdig;
using TestCreater.Models;

namespace TestCreater.Pages;
public partial class Create
{
    public QuestionModel Model { get; set; } = new QuestionModel();
    public string Preview(string text) => Markdown.ToHtml(text);
}
