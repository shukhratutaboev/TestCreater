using System.Text.Json.Serialization;

namespace TestCreater.Models;
public class QuestionModel
{
    [JsonPropertyName("Content")]
    public string Content { get; set; } = "";

    [JsonPropertyName("OptionA")]
    public string OptionA { get; set; } = "";

    [JsonPropertyName("OptionB")]
    public string OptionB { get; set; } = "";

    [JsonPropertyName("OptionC")]
    public string OptionC { get; set; } = "";

    [JsonPropertyName("OptionD")]
    public string OptionD { get; set; } = "";

    [JsonPropertyName("Answer")]
    public string Answer { get; set; } = "A";

    [JsonPropertyName("Creater")]
    public string Creater { get; set; } = "";
}